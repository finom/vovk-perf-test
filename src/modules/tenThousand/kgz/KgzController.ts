import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgz")
export default class KgzController {
  @operation({
    summary: "Get Kgz",
  })
  @get()
  static getKgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgz",
  })
  @post("{id}")
  static createKgz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
