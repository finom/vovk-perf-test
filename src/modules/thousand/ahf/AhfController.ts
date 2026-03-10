import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahf")
export default class AhfController {
  @operation({
    summary: "Get Ahf",
  })
  @get()
  static getAhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ahf",
  })
  @post("{id}")
  static createAhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
