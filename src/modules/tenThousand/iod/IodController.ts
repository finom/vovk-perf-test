import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iod")
export default class IodController {
  @operation({
    summary: "Get Iod",
  })
  @get()
  static getIod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iod",
  })
  @post("{id}")
  static createIod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
