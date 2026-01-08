import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqs")
export default class AqsController {
  @operation({
    summary: "Get Aqs",
  })
  @get()
  static getAqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqs",
  })
  @post("{id}")
  static createAqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
