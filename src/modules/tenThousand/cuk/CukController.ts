import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuk")
export default class CukController {
  @operation({
    summary: "Get Cuk",
  })
  @get()
  static getCuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuk",
  })
  @post("{id}")
  static createCuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
