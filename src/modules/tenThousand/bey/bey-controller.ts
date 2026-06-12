import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bey")
export default class BeyController {
  @operation({
    summary: "Get Bey",
  })
  @get()
  static getBey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bey",
  })
  @post("{id}")
  static createBey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
