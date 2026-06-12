import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzi")
export default class FziController {
  @operation({
    summary: "Get Fzi",
  })
  @get()
  static getFzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzi",
  })
  @post("{id}")
  static createFzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
