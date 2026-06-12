import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dey")
export default class DeyController {
  @operation({
    summary: "Get Dey",
  })
  @get()
  static getDey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dey",
  })
  @post("{id}")
  static createDey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
