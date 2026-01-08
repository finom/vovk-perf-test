import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdc")
export default class HdcController {
  @operation({
    summary: "Get Hdc",
  })
  @get()
  static getHdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdc",
  })
  @post("{id}")
  static createHdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
