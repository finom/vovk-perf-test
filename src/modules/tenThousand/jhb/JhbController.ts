import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhb")
export default class JhbController {
  @operation({
    summary: "Get Jhb",
  })
  @get()
  static getJhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhb",
  })
  @post("{id}")
  static createJhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
