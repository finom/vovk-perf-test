import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbf")
export default class HbfController {
  @operation({
    summary: "Get Hbf",
  })
  @get()
  static getHbf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbf",
  })
  @post("{id}")
  static createHbf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
