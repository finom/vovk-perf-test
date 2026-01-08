import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddc")
export default class DdcController {
  @operation({
    summary: "Get Ddc",
  })
  @get()
  static getDdc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddc",
  })
  @post("{id}")
  static createDdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
