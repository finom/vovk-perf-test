import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mib")
export default class MibController {
  @operation({
    summary: "Get Mib",
  })
  @get()
  static getMib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mib",
  })
  @post("{id}")
  static createMib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
