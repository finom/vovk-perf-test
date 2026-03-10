import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itc")
export default class ItcController {
  @operation({
    summary: "Get Itc",
  })
  @get()
  static getItc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itc",
  })
  @post("{id}")
  static createItc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
