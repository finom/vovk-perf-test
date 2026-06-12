import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjf")
export default class HjfController {
  @operation({
    summary: "Get Hjf",
  })
  @get()
  static getHjf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hjf",
  })
  @post("{id}")
  static createHjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
