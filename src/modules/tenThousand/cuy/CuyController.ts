import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuy")
export default class CuyController {
  @operation({
    summary: "Get Cuy",
  })
  @get()
  static getCuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuy",
  })
  @post("{id}")
  static createCuy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
