import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwr")
export default class IwrController {
  @operation({
    summary: "Get Iwr",
  })
  @get()
  static getIwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwr",
  })
  @post("{id}")
  static createIwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
