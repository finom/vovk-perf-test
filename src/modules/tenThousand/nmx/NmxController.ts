import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmx")
export default class NmxController {
  @operation({
    summary: "Get Nmx",
  })
  @get()
  static getNmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmx",
  })
  @post("{id}")
  static createNmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
