import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwr")
export default class DwrController {
  @operation({
    summary: "Get Dwr",
  })
  @get()
  static getDwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwr",
  })
  @post("{id}")
  static createDwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
