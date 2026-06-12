import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cey")
export default class CeyController {
  @operation({
    summary: "Get Cey",
  })
  @get()
  static getCey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cey",
  })
  @post("{id}")
  static createCey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
