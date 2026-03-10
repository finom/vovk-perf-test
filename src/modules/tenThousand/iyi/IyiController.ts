import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyi")
export default class IyiController {
  @operation({
    summary: "Get Iyi",
  })
  @get()
  static getIyi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyi",
  })
  @post("{id}")
  static createIyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
