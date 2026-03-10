import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyq")
export default class CyqController {
  @operation({
    summary: "Get Cyq",
  })
  @get()
  static getCyq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyq",
  })
  @post("{id}")
  static createCyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
