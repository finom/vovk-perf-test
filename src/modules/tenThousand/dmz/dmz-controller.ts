import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmz")
export default class DmzController {
  @operation({
    summary: "Get Dmz",
  })
  @get()
  static getDmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmz",
  })
  @post("{id}")
  static createDmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
