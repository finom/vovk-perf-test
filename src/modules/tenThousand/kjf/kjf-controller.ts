import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjf")
export default class KjfController {
  @operation({
    summary: "Get Kjf",
  })
  @get()
  static getKjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjf",
  })
  @post("{id}")
  static createKjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
