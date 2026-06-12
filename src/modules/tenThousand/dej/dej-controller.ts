import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dej")
export default class DejController {
  @operation({
    summary: "Get Dej",
  })
  @get()
  static getDej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dej",
  })
  @post("{id}")
  static createDej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
