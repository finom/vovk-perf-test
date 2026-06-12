import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cum")
export default class CumController {
  @operation({
    summary: "Get Cum",
  })
  @get()
  static getCum = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cum",
  })
  @post("{id}")
  static createCum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
