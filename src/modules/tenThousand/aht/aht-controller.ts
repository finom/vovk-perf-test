import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aht")
export default class AhtController {
  @operation({
    summary: "Get Aht",
  })
  @get()
  static getAht = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aht",
  })
  @post("{id}")
  static createAht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
