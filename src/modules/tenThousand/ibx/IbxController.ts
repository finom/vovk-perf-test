import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibx")
export default class IbxController {
  @operation({
    summary: "Get Ibx",
  })
  @get()
  static getIbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibx",
  })
  @post("{id}")
  static createIbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
