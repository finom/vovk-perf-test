import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipp")
export default class IppController {
  @operation({
    summary: "Get Ipp",
  })
  @get()
  static getIpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipp",
  })
  @post("{id}")
  static createIpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
