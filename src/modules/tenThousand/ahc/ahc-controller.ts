import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahc")
export default class AhcController {
  @operation({
    summary: "Get Ahc",
  })
  @get()
  static getAhc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahc",
  })
  @post("{id}")
  static createAhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
