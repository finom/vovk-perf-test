import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixx")
export default class IxxController {
  @operation({
    summary: "Get Ixx",
  })
  @get()
  static getIxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixx",
  })
  @post("{id}")
  static createIxx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
