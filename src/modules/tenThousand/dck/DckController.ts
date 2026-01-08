import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dck")
export default class DckController {
  @operation({
    summary: "Get Dck",
  })
  @get()
  static getDck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dck",
  })
  @post("{id}")
  static createDck = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
