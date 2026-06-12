import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gc")
export default class GcController {
  @operation({
    summary: "Get Gc",
  })
  @get()
  static getGc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gc",
  })
  @post("{id}")
  static createGc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
