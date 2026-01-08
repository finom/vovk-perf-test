import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bus")
export default class BusController {
  @operation({
    summary: "Get Bus",
  })
  @get()
  static getBus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bus",
  })
  @post("{id}")
  static createBus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
