import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmw")
export default class DmwController {
  @operation({
    summary: "Get Dmw",
  })
  @get()
  static getDmw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmw",
  })
  @post("{id}")
  static createDmw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
