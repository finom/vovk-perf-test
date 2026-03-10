import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivp")
export default class IvpController {
  @operation({
    summary: "Get Ivp",
  })
  @get()
  static getIvp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivp",
  })
  @post("{id}")
  static createIvp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
