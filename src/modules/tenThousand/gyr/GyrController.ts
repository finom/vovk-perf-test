import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyr")
export default class GyrController {
  @operation({
    summary: "Get Gyr",
  })
  @get()
  static getGyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyr",
  })
  @post("{id}")
  static createGyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
