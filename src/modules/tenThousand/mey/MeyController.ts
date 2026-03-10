import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mey")
export default class MeyController {
  @operation({
    summary: "Get Mey",
  })
  @get()
  static getMey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mey",
  })
  @post("{id}")
  static createMey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
