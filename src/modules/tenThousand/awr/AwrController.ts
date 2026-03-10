import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awr")
export default class AwrController {
  @operation({
    summary: "Get Awr",
  })
  @get()
  static getAwr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awr",
  })
  @post("{id}")
  static createAwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
