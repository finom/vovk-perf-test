import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azn")
export default class AznController {
  @operation({
    summary: "Get Azn",
  })
  @get()
  static getAzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azn",
  })
  @post("{id}")
  static createAzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
