import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmi")
export default class HmiController {
  @operation({
    summary: "Get Hmi",
  })
  @get()
  static getHmi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmi",
  })
  @post("{id}")
  static createHmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
