import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dch")
export default class DchController {
  @operation({
    summary: "Get Dch",
  })
  @get()
  static getDch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dch",
  })
  @post("{id}")
  static createDch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
