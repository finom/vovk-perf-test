import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyz")
export default class IyzController {
  @operation({
    summary: "Get Iyz",
  })
  @get()
  static getIyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyz",
  })
  @post("{id}")
  static createIyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
