import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gey")
export default class GeyController {
  @operation({
    summary: "Get Gey",
  })
  @get()
  static getGey = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gey",
  })
  @post("{id}")
  static createGey = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
