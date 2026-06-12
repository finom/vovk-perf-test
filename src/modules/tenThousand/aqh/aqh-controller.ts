import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqh")
export default class AqhController {
  @operation({
    summary: "Get Aqh",
  })
  @get()
  static getAqh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqh",
  })
  @post("{id}")
  static createAqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
