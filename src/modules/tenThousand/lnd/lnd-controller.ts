import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnd")
export default class LndController {
  @operation({
    summary: "Get Lnd",
  })
  @get()
  static getLnd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnd",
  })
  @post("{id}")
  static createLnd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
