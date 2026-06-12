import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jey")
export default class JeyController {
  @operation({
    summary: "Get Jey",
  })
  @get()
  static getJey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jey",
  })
  @post("{id}")
  static createJey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
