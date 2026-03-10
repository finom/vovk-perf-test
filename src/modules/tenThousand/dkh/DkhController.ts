import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dkh")
export default class DkhController {
  @operation({
    summary: "Get Dkh",
  })
  @get()
  static getDkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dkh",
  })
  @post("{id}")
  static createDkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
