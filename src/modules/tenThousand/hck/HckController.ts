import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hck")
export default class HckController {
  @operation({
    summary: "Get Hck",
  })
  @get()
  static getHck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hck",
  })
  @post("{id}")
  static createHck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
