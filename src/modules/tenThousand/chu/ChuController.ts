import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chu")
export default class ChuController {
  @operation({
    summary: "Get Chu",
  })
  @get()
  static getChu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chu",
  })
  @post("{id}")
  static createChu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
