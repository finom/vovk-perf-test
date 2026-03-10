import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avg")
export default class AvgController {
  @operation({
    summary: "Get Avg",
  })
  @get()
  static getAvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Avg",
  })
  @post("{id}")
  static createAvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
