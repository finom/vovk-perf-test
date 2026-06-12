import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmx")
export default class DmxController {
  @operation({
    summary: "Get Dmx",
  })
  @get()
  static getDmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmx",
  })
  @post("{id}")
  static createDmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
