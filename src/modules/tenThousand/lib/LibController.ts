import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lib")
export default class LibController {
  @operation({
    summary: "Get Lib",
  })
  @get()
  static getLib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lib",
  })
  @post("{id}")
  static createLib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
