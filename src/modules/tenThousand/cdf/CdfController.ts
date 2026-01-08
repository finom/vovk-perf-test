import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdf")
export default class CdfController {
  @operation({
    summary: "Get Cdf",
  })
  @get()
  static getCdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdf",
  })
  @post("{id}")
  static createCdf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
