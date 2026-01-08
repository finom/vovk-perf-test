import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilb")
export default class IlbController {
  @operation({
    summary: "Get Ilb",
  })
  @get()
  static getIlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilb",
  })
  @post("{id}")
  static createIlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
